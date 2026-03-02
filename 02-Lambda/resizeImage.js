/**
 * Lambda hndler function
 * This function runs when an event triggers it
 */
exports.handler = async (event) => {
  // Log the incoming evvent for debugging
  console.log("Received event:", JSON.stringify(event));

  try {
    // Simulate processing task (example: image resize logic)
    const result = {
      message: "Image processed successfully",
      timestamp: new Date().toISOString(),
    };

    // Return successful response
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    // Error handling
    console.error("Error processiong image:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
