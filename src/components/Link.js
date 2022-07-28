/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import MuiLink from '@mui/material/Link'

function Link({ children, ...props }) {
  return <MuiLink {...props}>{children}</MuiLink>
}

export default Link
