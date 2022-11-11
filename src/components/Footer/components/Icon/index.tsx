type iconType = {
  ICON: any;
  TO: string;
};
export function IconC({ ICON, TO }: iconType) {
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return (
    <a target={"_blank"} href={TO} rel="noreferrer">
      {ICON}
    </a>
  );
}
