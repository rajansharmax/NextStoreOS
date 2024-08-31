import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
import { UserRepository } from "@/lib/prisma/repository/userRepository";

export async function GET(req: NextRequest) {
    try {
        const users = await UserRepository.findAll();
        return NextResponse.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.error();
    }
}

// Handle other HTTP methods as needed, like POST, PUT, DELETE, etc.

  // useEffect(() => {
  //   async function fetchUsers() {
  //     const response = await fetch("/api/users");
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //     } else {
  //       console.error("Failed to fetch users");
  //     }
  //   }

  //   fetchUsers();
  // }, []);