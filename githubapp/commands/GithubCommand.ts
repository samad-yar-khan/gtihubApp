import { ISlashCommand, SlashCommandContext } from "@rocket.chat/apps-engine/definition/slashcommands";
import {
    IHttp,
    IMessageBuilder,
    IModify,
    IModifyCreator,
    IPersistence,
    IRead
} from "@rocket.chat/apps-engine/definition/accessors";

  import {IMessage} from '@rocket.chat/apps-engine/definition/messages'
  import {IRoom} from '@rocket.chat/apps-engine/definition/rooms'
  import {IUser} from '@rocket.chat/apps-engine/definition/users'

export class GithubCommand implements ISlashCommand {
    public command = "github";
    public i18nDescription = "fetching githup data";
    public providesPreview = false;
    public i18nParamsExample = "";

    public async executor(
        context: SlashCommandContext,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence
    ): Promise<void> { 
        const creator: IModifyCreator = modify.getCreator()
        const sender: IUser = (await read.getUserReader().getAppUser()) as IUser
        const room: IRoom = context.getRoom()
        const messageTemplate: IMessage = {
        text: 'Github App working !',
        sender,
        room
        }
        const messageBuilder: IMessageBuilder = creator.startMessage(messageTemplate)
        await creator.finish(messageBuilder)
    }
}