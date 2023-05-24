import { Global } from "@emotion/react";

const Page1 = ({ onClick }) => {
  return (
    <div>
      <Global styles={{ body: { background: "red" } }} />
      <div>Page 1</div>

      <a href={"#"} onClick={onClick}>
        CLICK ME TO PAGE 2
      </a>
    </div>
  );
};

export default Page1;
