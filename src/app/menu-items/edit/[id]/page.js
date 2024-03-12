"use client";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useProfile } from "@/components/UseProfile";
import EditableImage from "@/components/layout/EditableImage";
import UserTabs from "@/components/layout/UserTabs";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { redirect, useParams } from "next/navigation";

export default function EditMenuItemPage() {
  const { id } = useParams();
  const [image, setImage] = useState({
    link: "",
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [basePrice, setBasePrice] = useState();
  const [redirectToItems, setRedirectToItems] = useState(false);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((items) => {
        const item = items.find((i) => i._id === id);
        //setMenuItem(item);
        //console.log(item);
        setImage(item.image);
        setName(item.name);
        setDescription(item.description);
        setBasePrice(item.basePrice);
      });
    });
  }, []);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    const data = { image: image.link, name, description, basePrice };
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) resolve();
      else reject();
    });
    await toast.promise(savingPromise, {
      loading: "Saving this tasty items...",
      success: "saved!",
      error: "Error",
    });
    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect("/menu-items");
  }

  if (loading) {
    return "Loading user info...";
  }
  if (!data.admin) {
    return "Not an admin";
  }
  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-md mx-auto mt-8">
        <Link href={"/menu-items"} className="button gap-2 items-center">
          <FaRegArrowAltCircleLeft />
          <span>Show all menu items</span>
        </Link>
      </div>
      <form onSubmit={handleFormSubmit} className="mt-8 max-w-md mx-auto">
        <div
          className="grid items-start gap-4"
          style={{ gridTemplateColumns: ".3fr .7fr" }}
        >
          <div>
            <EditableImage link={image} setLink={setImage} />
          </div>
          <div className="grow">
            <label>Item name</label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <label>Base price</label>
            <input
              type="text"
              value={basePrice}
              onChange={(ev) => setBasePrice(ev.target.value)}
            />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}
