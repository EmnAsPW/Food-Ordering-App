import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "../../models/user";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  //console.log({ session, data });
  const email = session.user.email;

  await User.updateOne({ email }, data);

  return Response.json(true);
}

// export async function PUT(req) {
//   mongoose.connect(process.env.MONGO_URL);
//   const data = await req.json();
//   const { _id, name, image, ...otherUserInfo } = data;

//   console.log({ _id });
//   return Response.json(true);

//   // let filter = {};
//   // if (_id) {
//   //   filter = { _id };
//   // } else {
//   const session = await getServerSession(authOptions);
//   const email = session.user.email;
//   //filter = { email };
//   //}

//   //const user = await User.findOne(filter);
//   await User.updateOne(filter, { name, image });
//   await UserInfo.findOneAndUpdate({ email }, otherUserInfo, {
//     upsert: true,
//   });

//   return Response.json(true);
// }

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOptions);
  //console.log({ session, data });
  const email = session?.user?.email;
  if (!email) {
    return Response.json({});
  }
  return Response.json(await User.findOne({ email }));
}
