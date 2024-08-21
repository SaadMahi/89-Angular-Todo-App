import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../mock/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // json api
  private apiurl = 'http://localhost:5000/tasks';

  /** HttpClient
     for using api's asynchronous operations we use HttpClient 
     and to use this we need to provide it to the constructor in react we
     use fetch and axios but in this we do it like this 
   * */
  constructor(private http: HttpClient) {}

  /** Non async operation if we just have data 
    getTask(): Task[] {
    return TASKS;
  } 
  **/

  /** Handling async data using Observ is must, but in here we are trying it on data we already have
    getTask(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks; // to be able to return data of type observable we use "of" imported from rxjs
  } 
  **/

  /** Handling async data using json-server and getting data
   * here we won't be using "of" like previous example as as http client returns an observable
   **/
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiurl);
  }

  // Task reminder css toggle
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiurl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  // Api call for deleting task
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiurl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  // Api for add task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiurl, task, httpOptions);
  }
}
