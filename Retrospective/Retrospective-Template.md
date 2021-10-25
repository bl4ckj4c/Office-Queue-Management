TEMPLATE FOR RETROSPECTIVE (Team P01)
=====================================

The retrospective should include _at least_ the following
sections:

- [process measures](#process-measures)
- [quality measures](#quality-measures)
- [general assessment](#assessment)

## PROCESS MEASURES 

### Macro statistics

- Number of stories committed vs done: 3 committed and 3 done
- Total points committed vs done: 18 committed and 16 done
- Nr of hours planned vs spent (as a team): 56 hours planned and 57 hours spent

**Remember**  a story is done ONLY if it fits the Definition of Done:
 
- Unit Tests passing
- Code review completed
- Code present on VCS
- End-to-End tests performed

### Detailed statistics

| Story  | # Tasks | Points | Hours est. | Hours actual |
|--------|---------|--------|------------|--------------|
| _#0_   |    5    |    -   |    23      |     13.5     |
| S202101OQM-2 AS A Client I WANT TO select a service type SO THAT I can be served                          | 3 | 8 | 14 | 24.5 |
| S202101OQM-7 AS A Manager I WANT TO know the number of customers each counter has served (day/week/month) | 4 | 8 | 16 | 15.5 |
| S202101OQM-1 AS AN Officer I WANT TO notify that I am ready SO THAT I can serve the next client           | 2 | 2 | 4  | 3.5  |

- Hours per task (average, standard deviation)
  - Average: 4 hours and 4 minutes
  - Standard deviation: 3 hours and 40 minutes
- Total task estimation error ratio: sum of total hours estimation / sum of total hours spent from previous table
  - 56 / 57 = 0.982

  
## QUALITY MEASURES 

- Unit Testing:
  - Total hours estimated: 11 hours
  - Total hours spent: 10 hours
  - Nr of automated unit test cases: 5 hours
  - Coverage (if available): not available
- E2E testing:
  - Total hours estimated: 5 hours
  - Total hours spent: 30 minutes
- Code review 
  - Total hours estimated: 5 hours
  - Total hours spent: 4 hours and 30 minutes
- Technical Debt management:
  - Total hours estimated: -
  - Total hours spent: -
  - Hours estimated for remediation by SonarQube: -
  - Hours estimated for remediation by SonarQube only for the selected and planned issues: -
  - Hours spent on remediation: -
  - debt ratio (as reported by SonarQube under "Measures-Maintainability"): -
  - rating for each quality characteristic reported in SonarQube under "Measures" (namely reliability, security, maintainability ): -
  


## ASSESSMENT

- What caused your errors in estimation (if any)?</br>
We estimated a more hours for some tasks that we did't know very well (e.g. testing) and actually we spent less time; for other tasks we assigned less hours than needed and so we ended up with more spent time. These problems occurred because we didn't know each other capabilities and skills, so we cannot estimate the right time needed for each task.

- What lessons did you learn (both positive and negative) in this sprint?</br>
We have to think of what we want to do and agree on some kind of data exchanged between frontend and backend, so basically a better planning before starting the actual work.

- Which improvement goals set in the previous retrospective were you able to achieve?</br>
No one, this is the first retrospective.
  
- Which ones you were not able to achieve? Why?</br>
No one, this is the first retrospective.

- Improvement goals for the next sprint and how to achieve them (technical tasks, team coordination, etc.)</br>
The most important thing is a better communication between team members and a more tight team coordination. 

- One thing you are proud of as a Team!!</br>
Even though we had some problems in communication and coordination, we managed to complete most of the tasks respecting person hours limit.
