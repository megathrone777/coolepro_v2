import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <img alt="Logo." src="/images/logo_img.png" />
      </Link>
    </div>
  );
};

export { Logo };
