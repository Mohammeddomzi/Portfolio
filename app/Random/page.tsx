"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Image from "next/image";

const FormSchema = z.object({
  category: z.string({
    required_error: "Please select a category.",
  }),
});

const categories: { [key: string]: string } = {
  upcoming: "Upcoming",
  top_rated: "Top Rated",
  popular: "Popular",
  now_playing: "Now Playing",
};

const apiEndpoints: { [key: string]: string } = {
  upcoming: "https://api.themoviedb.org/3/movie/upcoming",
  top_rated: "https://api.themoviedb.org/3/movie/top_rated",
  popular: "https://api.themoviedb.org/3/movie/popular",
  now_playing: "https://api.themoviedb.org/3/movie/now_playing",
};

const MovieCarousel = () => {
  const [movies, setMovies] = useState<
    {
      poster_path: string;
      title: string;
      overview: string;
      vote_average: number;
      release_date: string;
      id: number;
    }[]
  >([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const fetchMovies = (category: string) => {
    const apiUrl = apiEndpoints[category];
    axios
      .get(apiUrl, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTA3OWMyNzJlYWUzZjE1ZGM4ZTNhYWZkNzQ3Y2MyMSIsIm5iZiI6MTcyMzY0NjA4NC43NDM2NjMsInN1YiI6IjY2YmM4ZTg0MDIyYjYwMTFlOThjN2YzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZDHkD4kvQTWg6qmntAlbs7ScELqGs_sb3GTq-X-aqL0",
        },
      })
      .then((response) => {
        const top10Movies = response.data.results.slice(0, 10);
        setMovies(top10Movies);
        console.log("Movies fetched:", top10Movies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    fetchMovies(data.category);
  };

  useEffect(() => {
    fetchMovies("popular");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-950 via-black to-black  text-cyan-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Movies</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-lg space-y-6 mx-auto mb-12"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cyan-100">Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-900 text-cyan-50 border-gray-700">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-800 text-cyan-50">
                    {Object.keys(categories).map((key) => (
                      <SelectItem key={key} value={key}>
                        {categories[key]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-cyan-600 text-white hover:bg-cyan-700"
          >
            Submit
          </Button>
        </form>
      </Form>

      <Carousel className="w-full max-w-5xl">
        <CarouselContent className="-ml-2">
          {movies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="pl-2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Card className="h-[28rem] w-full flex flex-col items-center justify-between bg-gray-800 text-cyan-50 border border-gray-700 rounded">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-[70%] object-cover rounded-t-md"
                  />
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{movie.title}</h3>
                    <p className="text-sm">Rating: {movie.vote_average}/10</p>
                    <p className="text-sm">
                      Release Date: {movie.release_date}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-cyan-600 hover:text-cyan-700" />
        <CarouselNext className="text-cyan-600 hover:text-cyan-700" />
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
