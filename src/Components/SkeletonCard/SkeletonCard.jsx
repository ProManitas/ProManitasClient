import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function SkeletonCard() {
  return (
      <Grid container spacing={2} justifyContent={"center"} marginTop={"10px"}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Skeleton />
                <Skeleton />
                <Skeleton variant="rectangular" height={250} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
}
