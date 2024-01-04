import ProfileHeader from "@/components/shared/ProfileHeader";
import UserCard from "@/components/cards/UserCard";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) return redirect("/onboarding");

  
  return (
    <section>
      <h1 className="head-text mb-10">Activity</h1>
    </section>
  );
};

export default page;
