"use client";

import { NewsListAPI, NewsListResultAPI } from "@/types/news-api";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getData } from "@/api/newsApi";

interface NewsListProps {
  data: NewsListAPI;
}

export default function NewsList(props: NewsListProps) {
  const [newsList, setNewsList] = useState<NewsListResultAPI[]>(
    props.data.articles
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (props.data) {
      setLoading(false);
    }
  }, [props.data]);

  function getApiData(url: string) {
    setLoading(true);

    getData(url)
      .then((apiReturn) => {
        setNewsList(apiReturn);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container fixed>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 2 }} display={{ xs: "inline ", lg: "block" }}>
            <Grid container spacing={2}>
              {newsList?.map((news, index) => (
                <Grid item xs={12} sm={5} md={4} lg={3} key={index}>
                  <NewsCard
                    title={news.title}
                    description={news.description}
                    author={news.author}
                    url={news.url}
                    urlToImage={news.urlToImage}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mt: 2 }}></Box>
        </>
      )}
    </Container>
  );
}
