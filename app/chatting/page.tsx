"use client";
import React, { useRef, useState } from "react";
import { firestore } from "@/app/firebase/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

function ChatRoom() {
  const { data: session } = useSession();
  const dummy = useRef<HTMLSpanElement>(null);
  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(messagesQuery);
  const [formValue, setFormValue] = useState("");

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-t from-gray-800 via-gray-900 to-black">
        <button
          onClick={() => signIn("google")}
          className="px-8 py-4 bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = session.user?.name;
    const photoURL = session.user?.image;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      name,
      photoURL,
    });

    setFormValue("");
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-gray-800 via-gray-900 to-black text-cyan-50">
      <main className="flex-grow p-8 overflow-auto pb-20">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form
        onSubmit={sendMessage}
        className="fixed bottom-16 left-0 w-full bg-gradient-to-b from-gray-900 p-4 flex items-center border-t border-gray-700"
      >
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Start Chatting"
          className="flex-grow p-2 bg-gray-800 text-cyan-50 border border-gray-700 rounded"
        />
        <button
          type="submit"
          disabled={!formValue}
          className="ml-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}

function ChatMessage(props: any) {
  const { text, name, photoURL } = props.message;

  return (
    <div className="flex items-start space-x-2 mb-4">
      <img
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
        alt="User avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold">{name || "Anonymous"}</span>
        <p className="bg-gray-800 p-2 rounded">{text}</p>
      </div>
    </div>
  );
}

export default ChatRoom;
