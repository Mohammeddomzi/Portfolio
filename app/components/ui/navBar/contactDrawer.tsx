"use client";
import { UserSearch } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./../drawer";
import { Button } from "../button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const ContactDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="sidebar-icon group relative flex flex-col items-center">
          <UserSearch
            size="26"
            className="h-12 w-12 pt-2 pb-2 mx-auto hover:bg-gray-900 
                     text-cyan-50 hover:text-white
                      hover:rounded-xl rounded-3xl
                      transition-all duration-300 ease-linear
                      cursor-pointer shadow-lg"
          />
          <span className="sidebar-tooltip group-hover:scale-100">
            Contacts
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">My Contacts</DrawerTitle>
          <DrawerDescription className="text-center">
            Here are my social media accounts and resume:
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col items-center gap-4 p-4 w-full">
          <a
            href="https://github.com/Mohammeddomzi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
            >
              <FaGithub size={20} />
              GitHub
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-alammar-701b48206/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </Button>
          </a>
          <a
            href="mailto:Mohammed.Alammar.m@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
            >
              <FaEnvelope size={20} />
              Email
            </Button>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full"
            >
              <IoDocumentText size={20} />
              Resume
            </Button>
          </a>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button className="flex items-center gap-2 w-full">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactDrawer;
