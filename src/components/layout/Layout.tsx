import React, { ReactNode } from "react";
import Navbar from "./menu/navbar";
{
  /* pode receber valores externos :) */
}
interface LayoutProps {
  titulo?: string;
  children?: ReactNode;
}

{
  /* Layout base usado em todo o site :) */
}
const Layout = (props: LayoutProps) => {
  return (
    <section className="main-content columns is-fullheight">
      <div className="container column is-10">
        <div className="card">
          <div className="card-header">
            <Navbar />
          </div>
          <div className="card-content">
            <div className="content">{props.children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
