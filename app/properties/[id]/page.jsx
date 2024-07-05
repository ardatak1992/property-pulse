"use client";

import { useRouter, useParams, useSearchParams } from "next/navigation";

const Property = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {id} = useParams()
  const name = searchParams.get("name")

  console.log("hello");

  return (
    <div>
      <button onClick={() => router.push("/")} className="bg-blue-500 p-2">
        Go Home {name}
      </button>
    </div>
  );
};

export default Property;
