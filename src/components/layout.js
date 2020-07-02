import React from "react";
import PropTypes from "prop-types";
import {FaShoppingCart} from "react-icons/fa";
import {StaticQuery,graphql} from "gatsby";

import "./bootstrap.min.css";
import "./layout.css";


const Layout =({children}
)=>(

<>
<FaShoppingCart/>
{children}
</>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
