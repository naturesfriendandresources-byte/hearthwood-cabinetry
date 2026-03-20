// curriculum-admin.js — Administration Track, Week 1
// Google Tools Beginner: Calendar + Gmail

window.PORTAL_CURRICULUM = {
  track: 'admin',
  title: 'Administration',
  weeks: [
    {
      weekNum: 1,
      theme: 'Google Tools Beginner — Calendar + Gmail',
      days: [
        {
          dayNum: 1,
          label: 'Google Calendar: Intro Video',
          type: 'video',
          duration: 25,
          videoTitle: 'Google Calendar Tips & Tricks — Kevin Stratvert',
          videoUrl: 'https://www.youtube.com/watch?v=2TKOyxY2DW4',
          videoDuration: '~12 min',
          segments: [
            'Min 1–5:   What is Google Calendar and why NFR uses it (Jose\'s schedule, IS calendar, job tracking)',
            'Min 6–10:  Watch video — first look at the interface',
            'Min 11–15: Pause video — open your calendar, find the sidebar, main grid, and Create button',
            'Min 16–20: Finish video — switch between Day, Week, Month, and Schedule views',
            'Min 21–25: Task: find today, switch to Week view, read one event on Jose\'s calendar'
          ],
          quiz: [
            { q: 'What view shows your upcoming events as a simple list?', options: ['Day view', 'Week view', 'Schedule view', 'Month view'], answer: 2 },
            { q: 'How do you create a new event in Google Calendar?', options: ['Press spacebar', 'Click any empty time slot or the + Create button', 'Right-click the date', 'Press Ctrl+N'], answer: 1 },
            { q: 'Where do you find Jose\'s calendar and the IS calendar?', options: ['In the search bar', 'In the left sidebar under My Calendars / Other Calendars', 'In Settings', 'Inside an event\'s details'], answer: 1 },
            { q: 'What does the "Today" button do?', options: ['Creates a new event for today', 'Shows today\'s weather', 'Jumps you back to today\'s date', 'Deletes past events'], answer: 2 },
            { q: 'Which view shows the full month at once?', options: ['Day view', 'Week view', 'Schedule view', 'Month view'], answer: 3 }
          ]
        },
        {
          dayNum: 2,
          label: 'Google Calendar: Quiz & Practice',
          type: 'quiz',
          duration: 25,
          taskDescription: 'Open Google Calendar. Navigate to next Monday. Switch to Day view. Find one of Jose\'s events and read the title, time, and any attendees listed.',
          segments: [
            'Min 1–5:   Recap Day 1 — what is a calendar event, what views are there?',
            'Min 6–10:  Q1: Schedule view shows events as a list — confirm and explain',
            'Min 11–15: Q2–Q3: Create button + sidebar — navigate to next Monday in Day view',
            'Min 16–20: Q4–Q5: Today button + Month view — find and read a calendar event aloud',
            'Min 21–25: Review answers, correct any mistakes'
          ],
          quiz: [
            { q: 'What view shows your upcoming events as a simple list?', options: ['Day view', 'Week view', 'Schedule view', 'Month view'], answer: 2 },
            { q: 'How do you create a new event in Google Calendar?', options: ['Press spacebar', 'Click any empty time slot or the + Create button', 'Right-click the date', 'Press Ctrl+N'], answer: 1 },
            { q: 'Where do you find Jose\'s calendar and the IS calendar?', options: ['In the search bar', 'In the left sidebar under My Calendars / Other Calendars', 'In Settings', 'Inside an event\'s details'], answer: 1 },
            { q: 'What does the "Today" button do?', options: ['Creates a new event for today', 'Shows today\'s weather', 'Jumps you back to today\'s date', 'Deletes past events'], answer: 2 },
            { q: 'Which view shows the full month at once?', options: ['Day view', 'Week view', 'Schedule view', 'Month view'], answer: 3 }
          ]
        },
        {
          dayNum: 3,
          label: 'Google Mail: Intro Video',
          type: 'video',
          duration: 25,
          videoTitle: 'Top 15 Gmail Tips & Tricks — Kevin Stratvert',
          videoUrl: 'https://www.youtube.com/watch?v=g6zYF7fbJk8',
          videoDuration: '~18 min',
          segments: [
            'Min 1–5:   What is Gmail and how NFR uses it (client emails, team updates)',
            'Min 6–10:  Watch video — Gmail interface: inbox, compose, sent, labels',
            'Min 11–15: Pause — open your Gmail, find: inbox, Compose button, search bar',
            'Min 16–20: Finish video — read an email, reply basics, archive vs. delete',
            'Min 21–25: Task: open inbox, find the most recent email, read the subject and sender out loud'
          ],
          quiz: [
            { q: 'Where do you click to write a new email in Gmail?', options: ['Reply', 'The Compose button', 'Settings', 'Search bar'], answer: 1 },
            { q: 'What does Archive do to an email?', options: ['Deletes it permanently', 'Moves it out of inbox but keeps it saved', 'Sends it back to the sender', 'Marks it as spam'], answer: 1 },
            { q: 'Where do sent emails go after you send them?', options: ['Inbox', 'Drafts', 'Sent folder', 'Trash'], answer: 2 },
            { q: 'What is the difference between Reply and Reply All?', options: ['No difference', 'Reply responds to everyone; Reply All only responds to the sender', 'Reply responds only to the sender; Reply All responds to everyone on the email', 'Reply All sends a copy to your inbox'], answer: 2 },
            { q: 'How do you find an old email quickly in Gmail?', options: ['Scroll through the inbox', 'Use the search bar at the top', 'Check the Drafts folder', 'Click Settings'], answer: 1 }
          ]
        },
        {
          dayNum: 4,
          label: 'Google Mail: Quiz & Practice',
          type: 'quiz',
          duration: 25,
          taskDescription: 'Open Gmail. Compose a test email to yourself and send it. Then find it in your Sent folder. Finally, use the search bar to find it again by subject line.',
          segments: [
            'Min 1–5:   Recap Day 3 — what is Gmail, what did the video cover?',
            'Min 6–10:  Q1–Q2: Compose button + Archive — open Gmail, find both buttons',
            'Min 11–15: Q3: Sent folder — compose a test email to yourself and send it',
            'Min 16–20: Q4–Q5: Reply vs. Reply All + search bar — find sent email using search',
            'Min 21–25: Review answers, correct any mistakes'
          ],
          quiz: [
            { q: 'Where do you click to write a new email in Gmail?', options: ['Reply', 'The Compose button', 'Settings', 'Search bar'], answer: 1 },
            { q: 'What does Archive do to an email?', options: ['Deletes it permanently', 'Moves it out of inbox but keeps it saved', 'Sends it back to the sender', 'Marks it as spam'], answer: 1 },
            { q: 'Where do sent emails go after you send them?', options: ['Inbox', 'Drafts', 'Sent folder', 'Trash'], answer: 2 },
            { q: 'What is the difference between Reply and Reply All?', options: ['No difference', 'Reply responds to everyone; Reply All only responds to the sender', 'Reply responds only to the sender; Reply All responds to everyone on the email', 'Reply All sends a copy to your inbox'], answer: 2 },
            { q: 'How do you find an old email quickly in Gmail?', options: ['Scroll through the inbox', 'Use the search bar at the top', 'Check the Drafts folder', 'Click Settings'], answer: 1 }
          ]
        },
        {
          dayNum: 5,
          label: 'Combined Review: Calendar + Gmail',
          type: 'review',
          duration: 20,
          segments: [
            'Min 1–5:   Verbal recap — 2 things you remember from Calendar, 2 from Gmail',
            'Min 6–10:  Combined quiz Q1–Q3',
            'Min 11–15: Combined quiz Q4–Q5 + hands-on: create a calendar event AND send a test email',
            'Min 16–20: Review answers, flag anything unclear for Jose'
          ],
          quiz: [
            { q: 'In Google Calendar, which view shows your events as a simple list?', options: ['Day view', 'Week view', 'Schedule view', 'Month view'], answer: 2 },
            { q: 'Where do you find Jose\'s calendar and the IS calendar in Google Calendar?', options: ['In the search bar', 'In the left sidebar under Other Calendars', 'In Settings', 'Inside an event'], answer: 1 },
            { q: 'In Gmail, what happens when you Archive an email?', options: ['It gets deleted', 'It moves out of your inbox but stays saved', 'It goes to spam', 'It gets sent back to the sender'], answer: 1 },
            { q: 'You want to write a new email in Gmail. What do you click?', options: ['Reply', 'Search bar', 'Compose button', 'Labels'], answer: 2 },
            { q: 'You\'re in Google Calendar and want to see the whole month at once. Which view?', options: ['Day', 'Week', 'Schedule', 'Month'], answer: 3 }
          ]
        }
      ]
    }
  ]
};
