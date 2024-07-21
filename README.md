
```markdown
# Chatbot Flow Builder

This project is a simple Chatbot Flow Builder built using React and React Flow. It allows users to create a chatbot flow by connecting multiple text message nodes.

## Features

1. **Text Node**
   - Supports multiple text message nodes in one flow.
   - Nodes can be added by dragging and dropping from the Nodes Panel.

2. **Nodes Panel**
   - Houses all kinds of nodes supported by the Flow Builder.
   - Currently, it only includes the Text Message node but is designed to be extensible for future node types.

3. **Edge**
   - Connects two nodes together.

4. **Source Handle**
   - Source of a connecting edge.
   - Can only have one edge originating from a source handle.

5. **Target Handle**
   - Target of a connecting edge.
   - Can have more than one edge connecting to a target handle.

6. **Settings Panel**
   - Replaces the Nodes Panel when a node is selected.
   - Includes a text field to edit the text of the selected Text Node.

7. **Save Button**
   - Saves the flow.
   - Shows an error if there are multiple nodes with empty target handles.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chatbot-flow-builder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chatbot-flow-builder
   ```
3. Install the dependencies:
   ```bash
   yarn
   ```
4. Start the development server:
   ```bash
   yarn dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the Nodes Panel to drag and drop text nodes into the flow.
3. Connect the nodes using edges.
4. Click on a node to edit its text in the Settings Panel.
5. Save the flow using the Save Button.

## Deployment

The project is deployed on Vercel. You can access it using the following link:

[Chatbot Flow Builder](https://flow-builder-eight.vercel.app/)

## Code Explanation

This project is built with React and React Flow. Comments are added throughout the code to explain the functionality and the extensibility of the components.

## License

This project is licensed under the MIT License.
```
