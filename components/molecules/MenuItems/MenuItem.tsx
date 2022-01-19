import { Text } from "@chakra-ui/react";
import Link from "next/link";

type MenuItemsProps = {
  text: string;
  href: string;
};

export const MenuItem = ({ text, href }: MenuItemsProps) => {
  return (
    <Text color="gray.500" fontSize="18px">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </Text>
  );
};
