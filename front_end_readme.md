# Front-End development challenge: Event display

Given the supplied `events.json` file. Develop a page that displays the event data.

The file is structured as follows:

- `events`: array
	- `id`: number
	- `name`: string
	- `status`: string, one of PROSPECT, TENTATIVE, DEFINITE, CLOSED, LOST, WAITLISTED
	- `event_start`: iso8601 datetime,
	- `event_end`: iso8601 datetime),
	- `rooms`: array
		- `id`: number,
		- `name`: string
	- `guest_count`: number
	- `guaranteed_guest_count`: number
	- `grand_total`: number
	- `actual_amount`: number
	- `account`: object
		- `id`: integer
		- `name`: string
	- `contact`: object
		- `id`: number
		- `full_name`: number

The page should, at a minimum do the following
- Display event names, start and end times, status, contact, and account names
- Sort events by time
- Allow simple filtering of events by name
- Badge statuses with the following colors
	- PROSPECT:
	- TENTATIVE:
	- DEFINITE:
	- CLOSED:
	- LOST:
	- WAITLISTED:

Add additional features or display options that you think would be interesting or useful (and as time allows).

Start with Bootstrap as a base. Feel free to bring in outside libraries you feel would be useful.

There isn't one correct answer to this challenge. The intent is to see a small sample of your work and give us a jumping off point to discuss things during a technical interview.

You can provide your submission as a zip file via email, Dropbox, Google Drive, etc, or as a Github repository.
