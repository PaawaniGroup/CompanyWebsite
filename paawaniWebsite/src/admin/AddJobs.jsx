import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AddJobs = () => {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    experience: "",
    description: "",
    requirements: "",
    benefits: "",
    responsibilities: "",
    qualifications: "",
    companyDescription: "",
    workingConditions: "",
    featured: false,
    postedAt: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Helper function to handle changes for all fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const API_BASE_URL = import.meta.env.API_BASE_URL || "http://localhost:8000";
      const API_ENDPOINT = `${API_BASE_URL}/api/admin/jobs`;
      
      const dataToSend = {
        ...formData,
        requirements: formData.requirements.split(',').map(item => item.trim()).filter(item => item !== ""),
        benefits: formData.benefits.split(',').map(item => item.trim()).filter(item => item !== ""),
        responsibilities: formData.responsibilities.split(',').map(item => item.trim()).filter(item => item !== ""),
        qualifications: formData.qualifications.split(',').map(item => item.trim()).filter(item => item !== ""),
        workingConditions: formData.workingConditions.split(',').map(item => item.trim()).filter(item => item !== ""),
      };

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setIsError(false);
        // Clear the form on successful submission
        setFormData({
          title: "",
          department: "",
          location: "",
          type: "",
          experience: "",
          description: "",
          requirements: "",
          benefits: "",
          responsibilities: "",
          qualifications: "",
          companyDescription: "",
          workingConditions: "",
          featured: false,
          postedAt: "",
        });
      } else {
        setMessage(result.message || "Failed to add job.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Failed to connect to the server. Please try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-25 px-4 bg-gray-50 min-h-screen">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-heading font-bold text-gray-800">Add New Job Posting</CardTitle>
          <CardDescription className="text-gray-500 font-body">
            Fill out the form below to create a new job opening.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Row 1 */}
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="e.g., Senior Software Engineer"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  name="department"
                  type="text"
                  placeholder="e.g., Engineering"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {/* Row 2 */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g., Remote or New York, NY"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Job Type</Label>
                <Input
                  id="type"
                  name="type"
                  type="text"
                  placeholder="e.g., Full-time, Contract"
                  value={formData.type}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {/* Row 3 */}
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Input
                  id="experience"
                  name="experience"
                  type="text"
                  placeholder="e.g., Mid-level"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postedAt">Posted Date</Label>
                <Input
                  id="postedAt"
                  name="postedAt"
                  type="date"
                  value={formData.postedAt}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            {/* Description and Company Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Write a detailed description of the role..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyDescription">Company Description</Label>
              <Textarea
                id="companyDescription"
                name="companyDescription"
                placeholder="Provide a description of the company for the job seeker..."
                value={formData.companyDescription}
                onChange={handleChange}
                required
              />
            </div>

            {/* Array-based inputs - Now just regular text fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements (comma-separated)</Label>
                <Input
                  id="requirements"
                  name="requirements"
                  type="text"
                  placeholder="e.g., 5+ years experience, React, Node.js"
                  value={formData.requirements} // No more join()
                  onChange={handleChange} // Using the single handler
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="benefits">Benefits (comma-separated)</Label>
                <Input
                  id="benefits"
                  name="benefits"
                  type="text"
                  placeholder="e.g., Health insurance, 401k, unlimited PTO"
                  value={formData.benefits}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="responsibilities">Responsibilities (comma-separated)</Label>
                <Input
                  id="responsibilities"
                  name="responsibilities"
                  type="text"
                  placeholder="e.g., Develop new features, Collaborate with team"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qualifications">Qualifications (comma-separated)</Label>
                <Input
                  id="qualifications"
                  name="qualifications"
                  type="text"
                  placeholder="e.g., BS in Computer Science, Strong problem-solving"
                  value={formData.qualifications}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workingConditions">Working Conditions (comma-separated)</Label>
                <Input
                  id="workingConditions"
                  name="workingConditions"
                  type="text"
                  placeholder="e.g., Flexible hours, Hybrid remote model"
                  value={formData.workingConditions}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Featured checkbox and submit button */}
            <div className="flex items-center space-x-2">
              <input
                id="featured"
                name="featured"
                type="checkbox"
                checked={formData.featured}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-primary rounded-md"
              />
              <Label htmlFor="featured" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Mark as Featured Job
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Adding Job..." : "Add Job"}
            </Button>
          </form>

          {message && (
            <div className={`mt-4 p-3 rounded-md text-center font-medium ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AddJobs;
