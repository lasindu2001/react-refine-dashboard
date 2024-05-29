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
            backgroundColor: '#85kl96',
            display: "flex",
            alignItems: "center",
            border: "none",
            ...style,
        }}
        {...rest}
    >
        Lasiya
    </AntdAvatar>
  )
}

export default CustomAvatar