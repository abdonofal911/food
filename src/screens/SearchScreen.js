import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView  } from "react-native";
import SearchBar from "../Components/SearchBar";
import yelp from "../api/yelp";
import useReasults from "../Hooks/useReasults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  
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
      <ResultsList  results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList  results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList  results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({ });

export default SearchScreen;
