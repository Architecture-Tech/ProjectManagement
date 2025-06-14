import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

import "./logo.css"
// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {


  // OR using local (public folder)
  // -------------------------------------------------------
  const logo = (
    <div style={{ display: "flex" }}>
      <Box
        component="img"
        src="/assets/project.png"
        sx={{ width: 50, height: 50, cursor: 'pointer', ...sx }}
      />
    </div>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
