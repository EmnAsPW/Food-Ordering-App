"use client";
//import AddressInputs from "@/components/layout/AddressInputs";
import EditableImage from "@/components/layout/EditableImage";
//import { useProfile } from "@/components/UseProfile";
import { useState } from "react";
import { useProfile } from "../UseProfile";
import AddressInputs from "./AddressInputs";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState({ link: user?.image || "" }); //link: menuItem?.image || ""
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();
  //const [isAdmin, setIsAdmin] = useState(false);
  //const [profileFetched, setProfileFetched] = useState(false);

  function handleAddressChange(propName, value) {
    if (propName === "phone") setPhone(value);
    if (propName === "streetAddress") setStreetAddress(value);
    if (propName === "postalCode") setPostalCode(value);
    if (propName === "city") setCity(value);
    if (propName === "country") setCountry(value);
  }

  return (
    <div className="flex gap-4">
      <div>
        <div className=" p-2 rounded-lg relative max-w-[120px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            name: userName,
            image: image.link,
            phone,
            admin,
            streetAddress,
            country,
            postalCode,
            city,
          })
        }
      >
        <label> First and last name</label>
        <input
          type="text"
          placeholder="First and last name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          disabled={true}
          value={user.email}
          placeholder={"email"}
        />
        <AddressInputs
          addressProps={{ phone, streetAddress, postalCode, city, country }}
          setAddressProp={handleAddressChange}
        />

        {loggedInUserData.admin && (
          <div>
            <label
              className="p-2 inline-flex items-center gap-2  mb-2"
              htmlFor="admincb"
            >
              <input
                id="admincb"
                type="checkbox"
                className=""
                value={"1"}
                checked={admin}
                onClick={(ev) => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
