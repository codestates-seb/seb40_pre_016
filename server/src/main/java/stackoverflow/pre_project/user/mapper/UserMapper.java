package stackoverflow.pre_project.user.mapper;

import org.mapstruct.Mapper;
import stackoverflow.pre_project.user.dto.UserDto;
import stackoverflow.pre_project.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto.Response userToUserResponse(User user);
}
