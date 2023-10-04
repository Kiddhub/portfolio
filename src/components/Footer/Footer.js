import React from "react";
import { IconBrandFacebook, IconBrandGithub } from "@tabler/icons-react";
import "./_footer.scss";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="facebook"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/q.minhpro12/"
              >
                <IconBrandFacebook width={30} height={30} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Kiddhub"
              >
                <IconBrandGithub width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
