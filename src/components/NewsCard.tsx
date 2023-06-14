"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function NewsCard(props: any) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Link href={props.url} target="_blank">
      <Card>
        <CardActionArea>
          {loading ? (
            <>
              <Skeleton variant="rectangular" height={140} />
              <CardContent>
                <Skeleton />
                <Skeleton width="60%" />
              </CardContent>
            </>
          ) : (
            <>
              <CardMedia
                component="img"
                height={props.title ? 140 : 350}
                image={props.urlToImage}
                alt={props.title}
              />
              {props.author && (
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {props.description}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Author: {props.author}
                  </Typography>
                </CardContent>
              )}
            </>
          )}
        </CardActionArea>
      </Card>
    </Link>
  );
}
