import { Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";

import { ThemedText } from "@/theme/components/themed-text";
import { ThemedView } from "@/theme/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/theme/theme";

export default function HomeScreen() {
  const assets = [
    { id: 1, name: "Asset 1", description: "Description 1" },
    { id: 2, name: "Asset 2", description: "Description 2" },
    { id: 3, name: "Asset 3", description: "Description 3" },
  ];

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="smallBold">Assets</ThemedText>
        <ThemedText type="small">Select an asset to get started</ThemedText>
        <ScrollView
          style={styles.assetsContainer}
          contentContainerStyle={styles.assetsContent}
        >
          {assets.map((asset) => {
            return (
              <Pressable
                key={asset.id}
                style={styles.assetContainer}
                onPress={() => {
                  console.log("Asset pressed", asset.id);
                  router.push(
                    {
                      pathname: "/asset",
                      params: { id: asset.id.toString() },
                    },
                    { withAnchor: true },
                  );
                }}
              >
                <ThemedText type="smallBold">{asset.name}</ThemedText>
                <ThemedText type="small">{asset.description}</ThemedText>
              </Pressable>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    flexDirection: "column",
    justifyContent: "center",
  },
  assetsContainer: {
    flexGrow: 1,
    width: "100%",
  },
  assetsContent: {
    gap: Spacing.two,
  },
  assetContainer: {
    padding: Spacing.three,
    borderRadius: Spacing.four,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
});
