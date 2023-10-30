import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { EndAdornmentProps } from "@/util/types";


  
  const EndAdornment = ({ passwordVisible, togglePasswordVisibility }: EndAdornmentProps) => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibility}>
          {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    );
  }
  export default EndAdornment