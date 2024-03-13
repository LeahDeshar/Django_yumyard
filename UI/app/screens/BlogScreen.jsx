import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Article } from "../utils/data/Article";
import Screen from "../components/Screen";

const BlogScreen = ({ route }) => {
  const id = route.params.id;
  //find the blog from the article
  const blogPost = Article.find((post) => post.id === id);
  console.log(blogPost);
  return (
    <Screen noSafeArea={false} className={"mx-5 mt-3"}>
      <View className={"flex-row"}>
        <Text className={"text-grey"}>ARTICLE /</Text>
        <Text className={"text-grey pl-3"}>COOKING STORY</Text>
      </View>
      <View>
        <Text className={"text-prim font-semibold text-2xl my-2"}>
          {blogPost.title}
        </Text>
        <View className={"flex-row items-center"}>
          <View>
            <Image
              source={{ uri: blogPost.user.image }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
            />
          </View>
          <View className={"ml-3 my-2"}>
            <Text className={"text-base"}>{blogPost.user.name}</Text>
            <Text className={"text-sm text-grey"}>Posted on Feb 7,2024</Text>
          </View>
        </View>
        <Text className={"text-base mb-3"}>{blogPost.desc}</Text>
        <Image
          source={blogPost.image}
          style={{
            width: 390,
            height: 230,
          }}
        />
      </View>
      <View className={"my-3"}>
        <Text className={"text-xl font-semibold text-prim"}>Related Links</Text>
        {blogPost.links.map((link, index) => (
          <TouchableOpacity key={index}>
            <Text className={"my-1 text-base italic text-slate-400"}>
              {link}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {blogPost.blogs.map((blog, index) => (
          <View key={index}>
            <Text className={"font-semibold text-2xl text-prim my-1"}>
              {blog.title}
            </Text>

            <Image
              source={{ uri: blog.images }}
              style={{
                width: 390,
                height: 430,
              }}
            />
            <Text className={"text-base my-3"}>{blog.desc}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
};

export default BlogScreen;
