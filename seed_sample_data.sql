-- Sample data for the Education Analytics Dashboard
-- This script populates the database with sample data for testing

-- Insert sample schools
INSERT INTO public.schools (id, name, address, district, state, school_type, total_students, total_teachers) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Sunrise Primary School', '123 Education Street, Mumbai', 'Mumbai', 'Maharashtra', 'government', 450, 18),
  ('550e8400-e29b-41d4-a716-446655440002', 'Green Valley High School', '456 Learning Avenue, Delhi', 'Delhi', 'Delhi', 'private', 800, 35),
  ('550e8400-e29b-41d4-a716-446655440003', 'Rural Education Center', '789 Village Road, Pune', 'Pune', 'Maharashtra', 'aided', 200, 12);

-- Insert sample students
INSERT INTO public.students (id, school_id, student_id, name, class, section, age, gender, parent_contact, enrollment_date, status) VALUES
  ('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'STU001', 'Aarav Sharma', '5th', 'A', 10, 'male', '+91-9876543210', '2024-04-01', 'active'),
  ('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', 'STU002', 'Priya Patel', '5th', 'A', 11, 'female', '+91-9876543211', '2024-04-01', 'active'),
  ('660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440001', 'STU003', 'Arjun Kumar', '6th', 'B', 12, 'male', '+91-9876543212', '2024-04-01', 'active'),
  ('660e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', 'STU004', 'Ananya Singh', '7th', 'A', 13, 'female', '+91-9876543213', '2024-04-01', 'active'),
  ('660e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440002', 'STU005', 'Rohan Gupta', '8th', 'B', 14, 'male', '+91-9876543214', '2024-04-01', 'active');

-- Note: Teachers, classes, assessments, and other data will be created when users sign up and use the system
-- This provides a foundation with schools and students for testing purposes
