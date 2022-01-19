import { Text } from "@chakra-ui/react";

type MenuItemsProps = {
  children: string | React.ReactNode;
}

export const MenuItem = ({ children }: MenuItemsProps) => {
  return (
    <Text color="#666666" fontSize="18px">
      {children}
    </Text>
  );
};