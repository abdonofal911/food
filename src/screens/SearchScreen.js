import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView  } from "react-native";
import SearchBar from "../Components/SearchBar";
import yelp from "../api/yelp";
import useReasults from "../Hooks/useReasults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = ({navigation}) => {
  
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useReasults();

  const filterResultsByPrice = (price)=>{
    // price $ || $$ || $$$
    return results.filter(results=> {
      return results.price === price ;
    })
  }
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
      <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({ });

export default SearchScreen;
