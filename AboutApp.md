Hotel Room Management Admin App
<br>
Description
<br>
Create a complete admin-facing solution for the management of rooms in a Hotel.
<br>

Hotel can have multiple rooms of multiple types.
Each room type has a different type of pricing.
<br>

Example:
Room type A: 100 Rs per hour
Room type B: 80 Rs per hour
Room type C: 50 Rs per hour
<br>

A Hotel can have
2 rooms of A type
3 rooms of B type 
5 rooms of C type
<br>

Create: A Page where the admin can book the room which takes the user’s email, room number, start time, and end time and books the room accordingly
The Price of the booking should update as soon as the user updates any one of the room number, start time or end time.
No two bookings should have overlapping start and end time for the same room.
<br>

Edit: Allow admin to edit any variables like user email, room number, start time, end time and correspondingly take confirmation on updated price.

Delete: Allow admin to cancel any future booking with the following conditions
If the booking start time is more than 48 hrs, Show a complete refund on UI
If booking start time is within 24 hrs to 48 hrs, 50% refund on UI
Else no refund (but admin can still cancel)
<br>

View: Create a view page for the admin to view all the bookings both upcoming and passed with the following filters
Filter by room number and room type
Filter by start time and end time
<br>

Note:
No need to develop login/signup pages, just make an assumption that only admins will be accessing it and just try to cover the basic requirements part with this assumption.
Create your app’s frontend as a SPA
<br>

Good to have
Email should get fired to users who have booked the room with the correct email, room number, start time and end time.
Take input of payment mode(Cash, card or UPI) with an option to add a tip to Hotel staff on the booking page.
Responsive Design
<br>

Submitting
Upload your code on GitHub or any other similar service and send us the link to it.
Make sure that the repository is marked public.
Also, you can deploy your app using aws/heroku or any other service and send us a link to it.
<br>

Evaluation Criteria
All Basic functionality is working. (i.e. Mentioned in the Requirements Section)
Database schema.
Code Modularity.
Code quality.