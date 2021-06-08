import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyword, onSearch } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        placeholder="Search"
        onIconPress={onFavouritesToggled}
        value={searchKeyword}
        onSubmitEditing={() => {
          onSearch(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
