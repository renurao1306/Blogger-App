import React from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BlogPostDetails({ data }) {
    const { id } = useParams();
    const post = data.find((item) => item.id === parseInt(id));
    if (!post) return null;

    const { title, date, content, image } = post;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '70px', paddingBottom: '40px', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ maxWidth: 900 }}>
                <CardMedia
                    sx={{ height: 200, objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {date}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default BlogPostDetails;
