import { Box } from '@material-ui/core';

const Cloudinary = (): JSX.Element => {
  return (
    <Box>
      <form method="post" action="/profile-image" encType="multipart/form-data">
        <Box>
          <input type="file" name="profile-image" required />
        </Box>
        <Box>
          <input type="submit" value="Upload Profile Avatar" />
        </Box>
      </form>
    </Box>
  );
};

export default Cloudinary;
