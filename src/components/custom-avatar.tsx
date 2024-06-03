import { getNameInitials, getRandomColorFromString } from "@/utilities";
import { Avatar as AntdAvatar, AvatarProps } from "antd"

type Props = AvatarProps & {
    name?: string;
  };

const CustomAvatar = ({ name = "", style, ...rest }: Props) => {
  return (
    <AntdAvatar
        alt={name}
        size="small"
        style={{
            backgroundColor: rest?.src ? 'transparent' : getRandomColorFromString(name),
            display: "flex",
            alignItems: "center",
            border: "none",
            ...style,
        }}
        {...rest}
    >
        {getNameInitials(name)}
    </AntdAvatar>
  )
}

export default CustomAvatar