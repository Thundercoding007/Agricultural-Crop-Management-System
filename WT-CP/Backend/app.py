import gradio as gr
import pandas as pd
import joblib  # or use pickle

# Load your trained model
model = joblib.load('HybridModel.pkl')  # Ensure the model is in the same directory

def predict(features):
    # Convert the input features to a DataFrame
    input_data = pd.DataFrame([features])
    
    # Make predictions using the loaded model
    predictions = model.predict(input_data)
    return predictions[0]  # Return the prediction

# Define the input features using the new syntax
input_features = [
    gr.Number(label="Feature 1"),
    gr.Number(label="Feature 2"),
    gr.Number(label="Feature 3"),
    gr.Number(label="Feature 4"),
    gr.Number(label="Feature 5"),
    gr.Number(label="Feature 6"),
    gr.Number(label="Feature 7"),
    gr.Number(label="Feature 8"),
    gr.Number(label="Feature 9"),
    gr.Number(label="Feature 10"),
]

# Define the output using the new syntax
output = gr.Number(label="Predicted Output")

# Create the Gradio interface
gr.Interface(fn=predict, inputs=input_features, outputs=output, title="Agriculture Prediction Model").launch()
