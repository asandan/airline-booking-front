import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginPage() {
  return (
    <main className="bg-blue-300 h-screen text-white flex items-center justify-center">
      <div className="bg-white rounded-3xl p-6 max-w-2xl w-1/3">
        <Typography variant="h4" gutterBottom className="text-center text-gray-800">
          LOGIN
        </Typography>
        <form className="space-y-4">
          <div>
            <TextField
              label="Mail"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <Button variant="outlined" color="primary" fullWidth>
              Login
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
