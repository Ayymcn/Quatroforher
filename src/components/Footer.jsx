import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {t("footer.copyright")}
      </p>

      {/* The style block remains the same, no changes needed for translation */}
      <style>{`
        .site-footer {
          background-color: #6b4e9b; /* purple footer */
          padding: 12px 10px; /* smaller padding for a thinner footer */
          text-align: center;
        }

        .site-footer p {
          margin: 0;
          font-size: 1.15rem; /* larger text */
          font-weight: 600;
          color: #fff; /* white text for contrast */
        }
      `}</style>
    </footer>
  );
}

export default Footer;