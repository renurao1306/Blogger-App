import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function BlogCard({ title, date, content, id, image }) {
    const truncatedContent = content.substring(0, 150);

    return (
        <>
            <Card variant="outlined" style={{ margin: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color="text.primary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {date}
                    </Typography>
                    <Typography variant="body2">
                        {truncatedContent} {content.length > 150 && '...'}
                    </Typography>
                </CardContent>
                <CardActions style={{ alignSelf: 'flex-end' }}>
                    <Button size="small" variant="contained">
                        <Link to={`/posts/${id}`} style={{color: "#FFF", textDecoration: 'none'}}>Read More</Link>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}