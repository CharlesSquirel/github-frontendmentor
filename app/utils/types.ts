export interface UserCardHeaderProps {
  userName?: string;
  userTag?: string;
  userDate?: string;
  userBio?: string;
}

export interface UserCardHeaderMobileProps
  extends UserCardHeaderProps {
  src: string;
}
