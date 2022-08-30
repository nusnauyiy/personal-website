import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const Gallery = (props) => {
  return (
    <Box sx={{ height: 450 }}>
      <ImageList variant='masonry' cols={3} gap={8}>
        {props.data.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={require(`./../../img/gallery/${item.src}`)}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
