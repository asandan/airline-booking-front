import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


interface EndAdornmentProps {
    passwordVisible: boolean;
    togglePasswordVisibility: () => void;
  }
  
  export default function EndAdornment({ passwordVisible, togglePasswordVisibility }: EndAdornmentProps) {
    return (
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibility}>
          {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    );
  }
  