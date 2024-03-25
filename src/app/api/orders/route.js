import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Order } from "@/app/models/order";
import { User } from "@/app/models/user";
//import { Order } from "@/models/Order";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  //const admin = await isAdmin();
  let isAdmin = false;

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  if (_id) {
    return Response.json(await Order.findById(_id));
  }

  if (userEmail) {
    const user = await User.findOne({ email: userEmail });
    if (user) {
      isAdmin = user.admin;
    }
  }

  //   if (admin) {
  //     return Response.json(await Order.find());
  //   }

  //   if (userEmail) {
  //     return Response.json(await Order.find({ userEmail }));
  //   }

  if (isAdmin) {
    return Response.json(await Order.find());
  }

  if (userEmail) {
    return Response.json(await Order.find({ userEmail }));
  }
}