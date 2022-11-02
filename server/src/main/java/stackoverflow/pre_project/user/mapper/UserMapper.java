package stackoverflow.pre_project.user.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import stackoverflow.pre_project.user.dto.UserDto;
import stackoverflow.pre_project.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "id", target = "userId")
    UserDto.Response userToUserResponse(User user);
}
