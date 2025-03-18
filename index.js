import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from "react-native";

const AppLayout = () => {
  // State for managing tasks
  const [tasks, setTasks] = useState([
    { id: "1", title: "Morning workout" },
    { id: "2", title: "Read my Bible" },
    { id: "3", title: "Code the app layout" },
    { id: "4", title: "Prepare lunch" },
    { id: "5", title: "Attend Joe's class" },
    { id: "6", title: "Complete assignment" },
    { id: "7", title: "Practice guitar" },
    { id: "8", title: "Organize desk" },
    { id: "9", title: "Read my course resources for next sem" },
    { id: "10", title: "Go for a walk" },
    { id: "11", title: "Code for 10 mins" },
    { id: "12", title: "Watch tutorial video" },
    { id: "13", title: "Meditate for 10 mins" },
    { id: "14", title: "Write a journal entry" },
    { id: "15", title: "Water the plants" },
  ]);

  // Categories data
  const categories = [
    { id: "1", name: "Exercise", icon: { uri: "https://via.placeholder.com/40" } },
    { id: "2", name: "Study", icon: { uri: "https://via.placeholder.com/40" } },
    { id: "3", name: "Code", icon: { uri: "https://via.placeholder.com/40" } },
    { id: "4", name: "Cook", icon: { uri: "https://via.placeholder.com/40" } },
    { id: "5", name: "Relax", icon: { uri: "https://via.placeholder.com/40" } },
    { id: "6", name: "Travel", icon: { uri: "https://via.placeholder.com/40" } },
    { id: "7", name: "Music", icon: { uri: "https://via.placeholder.com/40" } },
    { id: "8", name: "Organize", icon: { uri: "https://via.placeholder.com/40" } },
  ];

  // State for new task
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: (tasks.length + 1).toString(), title: newTask }]);
      setNewTask("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Application</Text>
      </View>

      {/* Categories Section */}
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.categoryCard}>
              <Image source={item.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      {/* Tasks Section */}
      <View style={styles.tasks}>
        <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          placeholderTextColor="#aaa"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.taskItem}>{item.title}</Text>
          )}
          style={styles.taskList}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f7f7f7",
    padding: 16,
  },
  header: {
    backgroundColor: "#6200ea",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  categories: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryCard: {
    backgroundColor: "#e8eaf6",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  tasks: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  addButton: {
    backgroundColor: "#6200ea",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskItem: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  taskList: {
    maxHeight: 200, // Adjust the height as needed
  },
});

export default AppLayout;