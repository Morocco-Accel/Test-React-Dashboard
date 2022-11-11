type userInfoType = {
  FIRST_NAME: string;
};
export function UserInfo({ FIRST_NAME }: userInfoType) {
  return (
    <div className="USER_INFO">
      <h1>Bonjour, {FIRST_NAME} !</h1>
      <p>voici ce qui ce passe sur votre compte aujourd'hui</p>
    </div>
  );
}
