import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import "rxjs/Rx";
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
  private messageSService: Message[] = [];

  constructor(private http: Http) {}

  addMessage(message: Message) {
    this.messageSService.push(message);
    console.log(this.messageSService);
    const bodyReq = JSON.stringify(message);
    const myHeaders = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post("http://localhost:3000/message", bodyReq, {
        headers: myHeaders,
      })
      .map((responseRecebida: Response) => responseRecebida.json()
      )
      .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json())
      );
  }

  getMessages() {
    return this.http
      .get("http://localhost:3000/message")
      .map((resposeRecebida: Response) => {
        const responseEmJson = resposeRecebida.json();
        const messageSResponseRecebida = responseEmJson.objsMessageSRecuperados;
        let transformedCastMassagesModelFrontEnd: Message[] = [];
        for (let msg of messageSResponseRecebida) {
          transformedCastMassagesModelFrontEnd.push(
            new Message(msg.content, "Nayara", msg._id, null)
          );
        }
        this.messageSService = transformedCastMassagesModelFrontEnd;
        return transformedCastMassagesModelFrontEnd;
      })
      .catch((erroRecebido: Response) => Observable.throw(erroRecebido.json()));
  }

  deleteMessage(message: Message) {
    this.messageSService.splice(this.messageSService.indexOf(message), 1);
  }
}
